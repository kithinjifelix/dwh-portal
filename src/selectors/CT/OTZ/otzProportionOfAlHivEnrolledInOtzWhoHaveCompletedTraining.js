import { createSelector } from 'reselect';

const filtered = state => state.filters.filtered;
const listFiltered = state => state.otzProportionOfAlHivWhoHaveCompletedOtzTraining.listFiltered;
const listUnfiltered = state => state.otzProportionOfAlHivWhoHaveCompletedOtzTraining.listUnfiltered;

export const getProportionOfAlhivEnrolledInOtzWhoHaveCompletedTraining = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;

        const arrayVal = [];
        const trainedValues = list.filter(obj => obj.training === 1);
        const unTrainedValues = list.filter(obj => obj.training === 0);

        if (trainedValues.length > 0) {
            arrayVal.push({
                name: 'TRAINED',
                y: trainedValues[0].count_training,
                color: "#69B34C"
            });
        } else {
            arrayVal.push({
                name: 'TRAINED',
                y: 0,
                color: "#69B34C"
            });
        }

        if (unTrainedValues.length > 0) {
            arrayVal.push({
                name: 'NOT TRAINED',
                y: unTrainedValues[0].count_training,
                color: "#142459"
            });
        } else {
            arrayVal.push({
                name: 'NOT TRAINED',
                y: 0,
                color: "#142459"
            });
        }

        return arrayVal;
    }
);
