import { useColorModeValue } from '@chakra-ui/react';

export const filterSynagogues = (selectedSynagogue: string, synagogues: any): number => {
  return synagogues.find((item: { name: string }) => item.name === selectedSynagogue).id;
}

export const useBackgroundColor = (lightColor: string, darkColor: string) => {
  return useColorModeValue(lightColor, darkColor);
}