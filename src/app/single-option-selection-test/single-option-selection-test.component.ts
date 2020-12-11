import { Component, OnInit } from '@angular/core';
import { Question } from "../question" ; 

@Component({
  selector: 'single-option-selection-test',
  templateUrl: './single-option-selection-test.component.html',
  styleUrls: ['./single-option-selection-test.component.css']
})
export class SingleOptionSelectionTestComponent {

  // Instance Data Members
  public questions : Array<Question> = [ ]  ; // [] - blank array object

  // ctor
  constructor() {
    this.questions.push ( { statement : "AAA", option1 : "A1", option2 : "A2", option3 : "A3", option4: "A4", correctAnswer : 1, marks : 5 }  );
    this.questions.push ( { statement : "BBB", option1 : "B1", option2 : "A2", option3 : "A3", option4: "A4", correctAnswer : 1, marks : 5 }  );
    this.questions.push ( { statement : "CCC", option1 : "C1", option2 : "A2", option3 : "A3", option4: "A4", correctAnswer : 1, marks : 5 }  );
    this.questions.push ( { statement : "DDD", option1 : "D1", option2 : "A2", option3 : "A3", option4: "A4", correctAnswer : 1, marks : 5 }  );
    this.questions.push ( { statement : "EEE", option1 : "E1", option2 : "A2", option3 : "A3", option4: "A4", correctAnswer : 1, marks : 5 }  );
  }

  // Instance Methods

  // Static Data Members

  // Static Methods

}