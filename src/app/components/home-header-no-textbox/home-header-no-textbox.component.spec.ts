import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeHeaderNoTextboxComponent } from './home-header-no-textbox.component';

describe('HomeHeaderNoTextboxComponent', () => {
  let component: HomeHeaderNoTextboxComponent;
  let fixture: ComponentFixture<HomeHeaderNoTextboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeaderNoTextboxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeaderNoTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
