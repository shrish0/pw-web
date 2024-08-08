function colorMixer(color1, color2) {
    let result;
    switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
            result = 'purple';
            break;
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
            result = 'orange';
            break;
        case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
            result = 'green';
            break;
        default:
            result = 'Invalid color combination';
    }
    console.log(result);
}

// Example usage:
colorMixer('red', 'blue');
colorMixer('red', 'yellow');
colorMixer('blue', 'yellow');
colorMixer('red', 'green');
