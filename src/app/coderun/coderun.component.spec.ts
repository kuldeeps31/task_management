import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderunComponent } from './coderun.component';

describe('CoderunComponent', () => {
  let component: CoderunComponent;
  let fixture: ComponentFixture<CoderunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoderunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoderunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
