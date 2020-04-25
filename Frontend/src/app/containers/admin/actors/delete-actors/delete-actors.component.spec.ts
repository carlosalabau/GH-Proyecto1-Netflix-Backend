import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActorsComponent } from './delete-actors.component';

describe('DeleteActorsComponent', () => {
  let component: DeleteActorsComponent;
  let fixture: ComponentFixture<DeleteActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
