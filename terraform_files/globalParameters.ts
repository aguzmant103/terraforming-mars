export {GlobalParameters, GlobalOcean, GlobalTemperature, GlobalOxygen};

// PENDING: move types and interfaces into their own files.
type GlobalOxygen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; // Only [0-14] oxigen levels are allowed. Even if trying to add more with effects.
type GlobalOcean = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; // Only [0-9] ocean levels are allowed. Even if there are more ocean titles.
type GlobalTemperature = -30 | -29 | -28 | -27 | -26 | -25 | -24 | -23 | -22 | -21 | // Only [-30, 8] are allowed. Ugly solution but will search for a more elegant in the future.
                         -20 | -19 | -18 | -17 | -16 | -15 | 14 | -13 | -12 | -11 |
                         -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |
                           0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;


/**
 * Type GlobalParameters that restricts the valid values for Oxygen, Ocean and Temperature.
 */
 type GlobalParameters = {
    globalOxygen: GlobalOxygen;
    globalOcean: GlobalOcean;
    globalTemperature : GlobalTemperature;
  }