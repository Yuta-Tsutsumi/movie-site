import React from "react";
import { Box } from '@material-ui/core';

export type Props = {
  item: { id: number; poster_path: string; title: string; overview: string };
  onMouse: boolean;
};

const MovieItem: React.VFC<Props> = {
  item,
} => {
  return (
    <Box
      cursor={'pointer'}
      mb={4}
      position={'relative'}
      w={'300px'}
    ></Box>
  )
export default MovieItem;
