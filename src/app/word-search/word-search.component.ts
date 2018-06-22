import { Component, OnInit } from '@angular/core';
import { GlosbeService } from '../glosbe.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.scss']
})
export class WordSearchComponent implements OnInit {

  languages = [
    {name: 'English', iso: 'eng'},
    {name: 'Spanish', iso: 'spa'},
    {name: 'Italian', iso: 'ita'},
    {name: 'French', iso: 'fra'},
    {name: 'Albanian', iso: 'sqi'},
    {name: 'Russian',   iso: 'rus'},
    {name: 'Chinese', iso: 'cmn'},
    {name: 'Japanese', iso: 'jpn'},
    {name: 'Korean', iso: 'kor'},
  ];

  word: String;
  queryForm: FormGroup;

  from_lang: String;
  dest_lang: String;
  fromLangSelected: any;
  destLangSelected: any;

  onSubmit(form: NgForm) {
    event.preventDefault();
    console.log(this.word);
    console.log(this.queryForm.value);
    const query = {
      'word': this.word
    };
    this.api.sendQuery(query)
      .subscribe(res => {
        console.log(res);
        }, (err) => {
          console.log(err);
        });
      }

    onFromSelected(event) {
      console.log(event);
    }
    onDestSelected(event) {
      console.log(event);
    }

  constructor(private api: GlosbeService, private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

}
