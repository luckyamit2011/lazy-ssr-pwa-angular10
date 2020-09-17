import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule,} from '@angular/common/http/testing';
import {RouterTestingModule}  from '@angular/router/testing';
import { LaunchesComponent } from './launches.component';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesComponent ],
      imports: [  
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
