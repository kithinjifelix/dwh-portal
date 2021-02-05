import _ from 'lodash';
import { createSelector } from 'reselect';

const listUnfiltered = state => state.newOnArtByAgeSex.listUnfiltered;
const listFiltered = state => state.newOnArtByAgeSex.listFiltered;
const filtered = state => state.filters.filtered;

export const getNewOnArtByAgeSex = createSelector(
    [listUnfiltered, listFiltered, filtered],
    (listUnfiltered, listFiltered, filtered) => {
        const list = filtered ? listFiltered : listUnfiltered;
        const ageGroups = [
            "Under 1",
            "1 to 4",
            "5 to 9",
            "10 to 14",
            "15 to 19",
            "20 to 24",
            "25 to 29",
            "30 to 34",
            "35 to 39",
            "40 to 44",
            "45 to 49",
            "50 to 54",
            "55 to 59",
            "60 to 64",
            "65+"
        ];
        let newOnArtMale = [];
        let newOnArtFemale = [];
        
        for(let i = 0; i < list.length; i++) {
            if (list[i].Gender.toLowerCase() === "M".toLowerCase() || list[i].Gender.toLowerCase() === "Male".toLowerCase()) {
                let index = ageGroups.indexOf(list[i].AgeGroup);
                newOnArtMale.splice(index, 0, parseInt(list[i].txNew));
            }
            else if (list[i].Gender.toLowerCase() === "F".toLowerCase() || list[i].Gender.toLowerCase() === "Female".toLowerCase()) {
                let index = ageGroups.indexOf(list[i].AgeGroup);
                newOnArtFemale.splice(index, 0, parseInt(list[i].txNew));
            }
        }

        let max = _.max([_.max(newOnArtMale), _.max(newOnArtFemale)]);
        newOnArtMale = newOnArtMale.map(x => x * -1);

        return { max, ageGroups, newOnArtMale, newOnArtFemale };
    }
);
