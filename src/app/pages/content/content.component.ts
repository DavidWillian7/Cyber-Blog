import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datasStatics } from '../../data/datasStatics'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  private id: string | null = "0";
  photo: string = "";
  title: string = "";
  text: string[] = [""];
  
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    );

    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null){
    const result = datasStatics.filter(article => article.id == id)[0];
    
    this.title = result.title;
    this.photo = result.photo;
    this.text = this.spliceText(result.text);
  }

  spliceText(text: string): string[]{
    let paragraphs: string[];
    paragraphs = text.split("<br>");
    return paragraphs;
  }
}
