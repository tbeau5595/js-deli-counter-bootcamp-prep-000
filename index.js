function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    let current = katzDeli.shift();
    return (`Currently serving ${current}.`);
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  }
  
  let lineNamesandNumbers = [];
  
  for (let i = 0; i < line.length; i++) {
    lineNamesandNumbers.push(`${i + 1}: ${line[i]}`);
  }
  
  return (`The line is currently: ${lineNamesandNumbers.join(', ')}`);
}

