import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorComponent } from './interceptor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InterceptorComponent', () => {
  let component: InterceptorComponent;
  let fixture: ComponentFixture<InterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterceptorComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
