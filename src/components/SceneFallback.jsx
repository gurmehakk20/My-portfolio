/**
 * Lightweight DOM placeholder for a lazy 3D scene (no three.js needed): a spinner while loading,
 * or a quiet note if the scene failed.
 */
const SceneFallback = ({ label = 'Loading 3D scene', failed = false }) => (
  <div className="flex h-full w-full items-center justify-center" role="status" aria-label={failed ? undefined : label}>
    {failed ? <p className="text-sm text-white-600">3D preview unavailable</p> : <span className="scene-spinner" />}
  </div>
);

export default SceneFallback;
