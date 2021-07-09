export function createPartEvents(sequence, baseNote) {
  const events = [];
  const arg = []
  // place a dummy 'rest' note in any empty bucket
  // this ensures that a previously played note doesn't light up in the view
  const mappedSequence = sequence.map(bucket => {
    if (bucket.length < 1)
      return [{ value: 'rest' }];
    return bucket;
  });
  mappedSequence.forEach((bucket, bucketIndex) => {
    bucket.forEach(({ value }, noteIndex) => {
      const [dur, time] =
        getDurAndTime(bucket.length, bucketIndex, noteIndex, baseNote);
      // events.push({ time, value, dur });
      events.push({ time, value, dur, noteIndex, bucketIndex });
      arg.push({ noteIndex, bucketIndex })
    });
  });
  // console.log('events', events);
  // event
  return events;
  // return [events, arg];
}

function getDurAndTime(bucketLength, bucketIndex, noteIndex, baseNote) {
  const _dur = (baseNote / 4) / bucketLength;
  const dur = `0:${_dur}`;
  const start = `0:${bucketIndex * (baseNote / 4)}`;
  // 我觉得是这个time出了问题，好像现版本不能 字符串+了,确实是高版本已经换了，不用这种方式
  const time = `${start} + 0:${noteIndex * _dur}`;
  return [dur, time];
}
