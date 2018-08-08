import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 
    try {
      document.getElementById("layout").remove();  
      var layoutScript = document.createElement("script");
      layoutScript.setAttribute("id", "layout");
      layoutScript.setAttribute("src", "assets/js/layout.js");
      document.body.appendChild(layoutScript);

    } catch (error) {
      console.log('first time loading layout. Err: '+ error); 
      var layoutScript = document.createElement("script");
      layoutScript.setAttribute("id", "layout");
      layoutScript.setAttribute("src", "assets/js/layout.js");
      document.body.appendChild(layoutScript);
    }

    try {
      document.getElementById("jquerywow").remove();  
      var jquery1Script = document.createElement("script");
      jquery1Script.setAttribute("id", "jquerywow");
      jquery1Script.setAttribute("src", "assets/js/jquery.wow.min.js");
      document.body.appendChild(jquery1Script);

    } catch (error) {
      console.log('first time loading jquerywow. Err: '+ error); 
      var jquery1Script = document.createElement("script");
      jquery1Script.setAttribute("id", "jquerywow");
      jquery1Script.setAttribute("src", "assets/js/jquery.wow.min.js");
      document.body.appendChild(jquery1Script);
    }

    try {
      document.getElementById("jswow").remove();  
      var jswowScript = document.createElement("script");
      jswowScript.setAttribute("id", "jswow");
      jswowScript.setAttribute("src", "assets/js/wow.min.js");
      document.body.appendChild(jswowScript);

    } catch (error) {
      console.log('first time loading jswow. Err: '+ error); 
      var jswowScript = document.createElement("script");
      jswowScript.setAttribute("id", "jswow");
      jswowScript.setAttribute("src", "assets/js/wow.min.js");
      document.body.appendChild(jswowScript);
    }

    try {
      document.getElementById("bootstrapjs").remove();  
      var bootstrapScript = document.createElement("script");
      bootstrapScript.setAttribute("id", "bootstrapjs");
      bootstrapScript.setAttribute("src", "assets/js/bootstrap.min.js");
      document.body.appendChild(bootstrapScript);

    } catch (error) {
      console.log('first time loading bootstrapjs. Err: '+ error); 
      var bootstrapScript = document.createElement("script");
      bootstrapScript.setAttribute("id", "bootstrapjs");
      bootstrapScript.setAttribute("src", "assets/js/bootstrap.min.js");
      document.body.appendChild(bootstrapScript);
    }
  }

  ngOnInit() {
  }

}
