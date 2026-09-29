import { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const BENGALURU = { lat: 12.97, lng: 77.59 };
const LABELS = [{ ...BENGALURU, text: 'Bengaluru, India', color: 'white', size: 15 }];

/** `active` pauses the globe's own render loop while it is scrolled offscreen. */
const GlobeView = ({ active = true }) => {
  const globeRef = useRef();

  // Start the globe facing Bengaluru instead of 0°/0°.
  const handleReady = () => globeRef.current?.pointOfView({ ...BENGALURU, altitude: 2.2 }, 0);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    if (active) globe.resumeAnimation();
    else globe.pauseAnimation();
  }, [active]);

  return (
    <Globe
      ref={globeRef}
      onGlobeReady={handleReady}
      height={300}
      width={300}
      backgroundColor="rgba(0, 0, 0, 0)"
      showGraticules
      globeImageUrl="/assets/globe/earth-night.jpg"
      bumpImageUrl="/assets/globe/earth-topology.jpg"
      labelsData={LABELS}
    />
  );
};

export default GlobeView;
