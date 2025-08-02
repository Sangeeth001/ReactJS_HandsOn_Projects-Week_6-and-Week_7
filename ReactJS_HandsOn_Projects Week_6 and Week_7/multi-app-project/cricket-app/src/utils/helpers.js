function calculateBattingAverage(runs, matches) {
  return matches > 0 ? (runs / matches).toFixed(2) : 0;
}

function filterLowScorers(players, threshold) {
  return players.filter(player => player.score < threshold);
}

function mergePlayerLists(list1, list2) {
  return [...list1, ...list2];
}

export { calculateBattingAverage, filterLowScorers, mergePlayerLists };