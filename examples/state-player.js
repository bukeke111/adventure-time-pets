export const animationStates = {
  idle: { row: 0, frames: 6, frameDuration: 220 },
  'running-right': { row: 1, frames: 8, frameDuration: 120 },
  'running-left': { row: 2, frames: 8, frameDuration: 120 },
  waving: { row: 3, frames: 4, frameDuration: 160 },
  jumping: { row: 4, frames: 5, frameDuration: 140 },
  failed: { row: 5, frames: 8, frameDuration: 260 },
  waiting: { row: 6, frames: 6, frameDuration: 240 },
  running: { row: 7, frames: 6, frameDuration: 140 },
  review: { row: 8, frames: 6, frameDuration: 260 }
};

const transitions = {
  idle: ['waving', 'running'],
  running: ['waiting', 'review', 'failed', 'jumping'],
  waiting: ['running', 'review'],
  review: ['jumping', 'failed', 'running'],
  failed: ['idle'],
  jumping: ['idle'],
  waving: ['running']
};

export function createSpritePlayer({ drawFrame, onStateChange = () => {} }) {
  let currentState = 'idle';
  let frame = 0;
  let elapsed = 0;
  let lastTime = 0;
  let animationFrame;

  function render() {
    drawFrame(animationStates[currentState], frame, currentState);
  }

  function setState(nextState, { resetFrame = true } = {}) {
    if (!animationStates[nextState]) {
      throw new Error(`Unknown animation state: ${nextState}`);
    }
    currentState = nextState;
    if (resetFrame) {
      frame = 0;
      elapsed = 0;
    }
    onStateChange(currentState);
    render();
  }

  function playTransition(nextState) {
    const allowed = transitions[currentState] || [];
    if (allowed.includes(nextState)) {
      setState(nextState);
      return;
    }
    setState(nextState);
  }

  function tick(timestamp) {
    if (!lastTime) lastTime = timestamp;
    elapsed += timestamp - lastTime;
    lastTime = timestamp;

    const state = animationStates[currentState];
    if (elapsed >= state.frameDuration) {
      frame = (frame + Math.floor(elapsed / state.frameDuration)) % state.frames;
      elapsed %= state.frameDuration;
      render();
    }
    animationFrame = requestAnimationFrame(tick);
  }

  render();
  animationFrame = requestAnimationFrame(tick);

  return {
    setState,
    playTransition,
    getState: () => currentState,
    stop: () => cancelAnimationFrame(animationFrame)
  };
}
