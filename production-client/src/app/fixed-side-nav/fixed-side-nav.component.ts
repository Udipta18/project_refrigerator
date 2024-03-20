import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from "@angular/platform-browser";

export interface mailtoAsset {
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-fixed-side-nav',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './fixed-side-nav.component.html',
  styleUrl: './fixed-side-nav.component.scss'
})
export class FixedSideNavComponent {

  constructor(private sanitizer: DomSanitizer) {}
  faPhone=faPhone;

  mailtoHeader = "mailto:dasdsa1208@gmail.com?";
  subjectProp = "subject=";
  bodyProp = "body=";
  amp = "&amp;";
  breakStr = "%0D%0A";
  footer = "Powered by Esploro!"

  test = 'mailto:?subject=Europe PMC citation&amp;body=PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT.%0D%0ALowry O H, Rosebrough N J, Farr A L, Randall R J%0D%0AJournal%20of%20Biological%20Chemistry.%201951%20Nov%3B193(1)%3A265-275%0D%0A%0D%0Ahttp://europepmc.org/article/MED/14907713%0D%0A%0D%0A%0D%0A PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT.%0D%0ALowry O H, Rosebrough N J, Farr A L, Randall R J%0D%0AJournal%20of%20Biological%20Chemistry.%201951%20Nov%3B193(1)%3A265-275%0D%0A%0D%0Ahttp://europepmc.org/article/MED/14907713" target="_self" class="action small semi-bold enabled'

  demoSubject = "Some example subject - can be anything really"

  demoAssets: mailtoAsset[] = [
    {
      title: "PROTAIN MEASUREMENT WITH THE FOLIN PENOL REAGENT",
      lines: ["Lowry O H, Rosebrough N J, Farr A L, Randall R J", "Journal of Biological Chemistry. 1951 Nov%3B193(1)%3A265-275", "http://europepmc.org/article/MED/14907713"]
    },
    {
      title: "Interference by monosaccharides with the estimation of tyrosine and proteins using the Folin-Ciocalteu phenol reagent",
      lines: ["O'Sullivan J, Mathison GE", "Anal Biochem, 35(2):540-542, 01 Jun 1970", "https://europepmc.org/article/MED/5450192"]
    },
    {
      title: "Antioxidant capacity of some herbs/spices from cameroon: a comparative study of two methods.",
      lines: ["Agbor GA, Oben JE, Ngogang JY, Xinxing C, Vinson JA", "J Agric Food Chem, 53(17):6819-6824, 01 Aug 2005", "https://europepmc.org/article/MED/16104805"],
    }
  ];

  

  ngOnInit() {}

  getStringifiedAssets(assets: mailtoAsset[], subject: string = "some subject you know") {
    let str = "";
    assets.forEach(asset => {
      str = str + asset.title.toUpperCase() + this.breakStr + this.joinLines(asset.lines) + this.breakStr + this.breakStr
    });
    const url = `${this.mailtoHeader}${this.subjectProp}${subject}&${this.bodyProp}${str}${this.footer}`;
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

  joinLines(lines: string[]) {
    return lines.join(this.breakStr);
  }
}
