import { Component, OnInit, Input } from '@angular/core';
import { GlosbeService } from '../glosbe.service';
import { MysentencesService } from '../mysentences.service';
import { Observable } from 'rxjs';
import { Sentence } from '../sentence';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-glosbe-results',
  templateUrl: './glosbe-results.component.html',
  styleUrls: ['./glosbe-results.component.scss']
})

export class GlosbeResultsComponent implements OnInit {

  queryForm: FormGroup;

  sentence: Sentence = {
    from_lang: '',
    dest_lang: '',
    from_text: '',
    dest_text: ''
  };

  @Input() results: Observable<any>;
  @Input() query: any;
  glosbeColumnsToDisplay = ['origin', 'target'];

  constructor(private api: GlosbeService, private update: MysentencesService) { }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.query);
    this.api.sendQuery(this.query)
      .subscribe(res => {
        console.log(res);
        setTimeout(
          () => { this.refreshResults(); }, 2000
        );
      }, (err) => {
        console.log(err);
      });
  }

  refreshResults() {
    this.api.getTranslations()
      .subscribe(res => {
        console.log('refreshing child');
        console.log(res);
        this.results = res;
      }, err => {
        console.log(err);
      });
  }

  handleSentenceClick(event) {
    console.log(event);
    this.sentence.from_lang = this.query.from_lang;
    this.sentence.dest_lang = this.query.dest_lang;
    this.sentence.from_text = event.target.parentElement.cells[0].innerText;
    this.sentence.dest_text = event.target.parentElement.cells[1].innerText;

  }

  addSelectedSentence() {
    console.log(this.sentence);
    this.update.addSentence(this.sentence)
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    // this.refreshResults();
  }

}
