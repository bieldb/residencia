import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConfig } from './request-config';

describe('RequestConfig', () => {
  let component: RequestConfig;
  let fixture: ComponentFixture<RequestConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
