import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../../../../../app.service';
import { entPermitApplicationRecommendation, entPermitApplication } from '../../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../../common/api-services/application-api/application-api.service';
import { CommonModule, NgClass } from '@angular/common';
import { InnerScroll } from '../../../../../app-core/core-component/core-component.component';
import { AccordionModule } from '../../../../../common/templates/accordion/accordion.module';
import { LabelTemplates } from '../../../../../common/templates/label-templates';
import { RecommendationContentComponent } from '../../../work-permit/permit-common-info/permit-recommendation-tab/recommendation-content/recommendation-content.component';
import { InvestorRecommendationContentComponent } from './investor-recommendation-content/investor-recommendation-content.component';

@Component({
  selector: 'app-investor-recommendation-tab',
  standalone: true,
  imports: [   
    LabelTemplates,
    CommonModule,
    AccordionModule,
    NgClass,
    InvestorRecommendationContentComponent,
    InnerScroll],
  templateUrl: './investor-recommendation-tab.component.html',
  styleUrl: './investor-recommendation-tab.component.scss'
})
export class InvestorRecommendationTabComponent {
 
  accordIndex = 0
  accordionTabList = [{ tabTitle: 'Comments' }, { tabTitle: 'Checklist' }]
  tabIndex = 0;
  checkListCount = 0;
  unCheckListCount = 0;

  recommendationItem = new entPermitApplicationRecommendation();

  @Input() investorParams = new entPermitApplication();
  @Output('permitParent') permitParent: EventEmitter<any> = new EventEmitter();

  constructor(public appService: AppService, public apiService: ApplicationApiService) {

  }

  ngOnInit(): void {
  }


  doSwap(accordionIndex: any, tabIndex: any, item:any) {
    this.investorParams.plstentPermitApplicationRecommendation[accordionIndex].tabIndex = tabIndex;
    this.recommendationItem = item;
  }

  getPermitData(event: any) {
    this.investorParams = event;
    this.permitParent.emit(this.investorParams)
    if (this.investorParams.plstentPermitApplicationRecommendation.length > 0) {
      this.investorParams.plstentPermitApplicationRecommendation.forEach((val: any) => {
        this.getCheckLstCount(val.plstentPermitApplicationRecommendationCheckList, val)
      })
    }
  }

  getCheckLstCount(event: any, item: any) {
    item.checkedCount = 0;
    item.uncheckedCount = 0;
    event.forEach((elem: any) => {
      if (elem.isChecked === '') {
        item.uncheckedCount = item.uncheckedCount + 1;
      }
      else {
        item.checkedCount = item.checkedCount + 1
      }
    })
    // console.log(item.checkedCount, this.unCheckListCount);
  }

  savePermitRecommendation(event:any){
     this.apiService.saveInvestorPermitApplicationRecommendation(event).subscribe((success) => {
        this.investorParams = success;
        this.permitParent.emit(this.investorParams);
     });
  }

}
