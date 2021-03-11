import {getStringBackwards, getStringLowerCase} from "../shared/stringTransformServices";

export const isPhraseAPalindrome = (phrase) => {

  const phraseLowerCase = getStringLowerCase(phrase);

  return phraseLowerCase === getStringBackwards(phraseLowerCase)
}