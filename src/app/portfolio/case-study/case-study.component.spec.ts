import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyComponent } from './case-study.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CaseStudyComponent', () => {
  let component: CaseStudyComponent;
  let fixture: ComponentFixture<CaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
        HttpClientModule ],
       declarations: [ CaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
