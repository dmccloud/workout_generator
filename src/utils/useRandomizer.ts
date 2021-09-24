import data from "../constants/data";
interface RandomReturn {
  workout: string;
  duration: string;
  intensity: string;
}

export const useRandomizer = (): RandomReturn => {
  const woIdx = Math.floor(Math.random() * data.workouts.length);
  const workout = data.workouts[woIdx];
  const inIdx = Math.floor(Math.random() * data.intensity[workout].length);

  const intensity = data.intensity[workout][inIdx];
  const drIdx = Math.floor(Math.random() * data.duration[workout].length);
  const duration = data.duration[workout][drIdx];

  const results = { workout, intensity, duration };
  return results;
};
