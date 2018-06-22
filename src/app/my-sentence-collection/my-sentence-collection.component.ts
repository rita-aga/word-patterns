import { Component, OnInit } from '@angular/core';
import { MysentencesService } from '../mysentences.service';

@Component({
  selector: 'app-my-sentence-collection',
  templateUrl: './my-sentence-collection.component.html',
  styleUrls: ['./my-sentence-collection.component.scss']
})
export class MySentenceCollectionComponent implements OnInit {

  mySentences = [];
  columnsToDisplay = ['origin_lang', 'target_lang', 'origin', 'target', 'date', 'delete'];

  constructor(private update: MysentencesService) { }

  getMySentences() {
    this.update.getSentences()
      .subscribe(res => {
        console.log(res);
        this.mySentences = res;
      }, (err) => {
        console.log(err);
      });
  }
  delete(id) {
    this.update.deleteSentence(id)
      .subscribe(res => {
          console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
      this.getMySentences();
  }
  ngOnInit() {
    this.getMySentences();
  }

}
