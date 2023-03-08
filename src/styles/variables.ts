import rem from '../helpers/rem-converter';

namespace Variables {
    export const colors = {
        mainRed: '#E30611',
        grayRed: '#C90000',
        errorRed: '#F95721',

        white: '#FFFFFF',
        blackColor: '#000000',
        whiteSmokeColor: '#D8D8D8',
        linkWaterColor: '#E2E5EB',

        greyHeatherColor: '#BBC1C7',
        greyHeaterAccent: '#BCC3D0',
        greyChateauColor: '#9198A0',
        greyScrollColor: '#AEB5BD',
        greyChateauAccent: '#969FA8',
        greyRavenColor: '#6E7782',
        greyNevadaColor: '#626C77',
        athensGray: '#f2f3f7',
        shark: '#1D2023',

        lightBlackberryColor: '#6384E0',
        midnightBlueColor: '#202D3D',
        deepBlueColor: '#001424',
        normalBlueberryColor: '#0097FD',
        darkBlueberryColor: '#0077DB',
        darkestBlueberryColor: '#0048AA',
        normalBlackberryColor: '#014FCE',
        darkBlackberryColor: '#333795',
        dodgerBlue: '#007CFF',
        pickledBlueWood: '#354558',

        normalPlumColor: '#883888',
        darkMintColor: '#03A17B',
        darkestYellow: '#f37f19',

        paleGrayBlueColor: '#F4F5FB',
        snowColor: '#F9F9F9'
    };

    export const border = {
        standard: '1px solid rgba(188, 195, 208, 0.5);'
    };

    export const background = {
        geolocation: 'rgba(188, 195, 208, 0.25)'
    };

    export const fontsize = {
        newStandard: `${rem(17)};`
    };

    export const borderRadius = `${rem(8)};`;
    export const borderBigRadius = `${rem(16)}`;


    export const sidebarContainerHide = {
        standard: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 44.27%, ${Variables.colors.white} 100%);`
    };
}

export default Variables;
