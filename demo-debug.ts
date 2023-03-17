async function loop(times = 0) {
  if (times === 5) return;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  times++;
  console.log(`Attempt: ${times}`);
  loop(times);
}

// Top-level await!
await loop();
