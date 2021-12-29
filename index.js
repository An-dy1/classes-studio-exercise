//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {

  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore = (score) => {
    this.scores.push(score);
  }

  average = () => {
    let sum = this.scores.reduce((a, b) => a + b, 0)
    let avg = sum / this.scores.length;
    let prettyAverage = Math.round(avg * 10)/10
    return prettyAverage;
  }

  status = (average) => {

    average = typeof(average) !== 'undefined' ? average : this.average();

    if(average > 90) {
      return `Accepted`;
    } else if(80 < average) {
      return `Reserve`
    } else if(average > 70) {
      return `Probationary`
    } else {
      return `Rejected`
    }
  }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);

let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);

let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62])

console.log(merryMaltese.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.