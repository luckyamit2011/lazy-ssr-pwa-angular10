import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule,} from '@angular/common/http/testing';
import {RouterTestingModule}  from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [  
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create/present', () => {
    expect(component).toBeTruthy();
  });

  it('Launch Year should be Start from 2006', () => {
    expect(component.startYear).toBe(2006);
  });

  it('Launch Year should be End at  '+new Date().getFullYear(), () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });
  
});
