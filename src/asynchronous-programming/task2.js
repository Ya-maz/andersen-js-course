function parseJSON(jsonStr, successCb, failureCb) {
  try {
    const parse = JSON.parse(jsonStr);
    successCb(parse);
  } catch (e) {
    failureCb(e);
  }
}

function successCb(result) {
  console.log('Success parse!');
  console.log(result);
}

function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
