import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";

@Component({
  selector: "app-name-form",
  templateUrl: "./name-form.component.html",
  styleUrls: ["./name-form.component.css"],
})
export class NameFormComponent implements OnInit {
  nameInput: string;
  constructor(private service: NameService) {}

  ngOnInit(): void {}
  setNewName() {
    this.service.setName(this.nameInput);
    console.log("I was clicked");
  }
}
