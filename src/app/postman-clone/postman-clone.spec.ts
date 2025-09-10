import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanClone } from './postman-clone';

describe('PostmanClone', () => {
  let component: PostmanClone;
  let fixture: ComponentFixture<PostmanClone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostmanClone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostmanClone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
