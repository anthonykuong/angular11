import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {Injector, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

export abstract class AbstractForm implements OnDestroy, OnInit {
  isLoading = new BehaviorSubject<boolean>(false);
  submitted = new BehaviorSubject<boolean>(false);

  formEvent: FormGroup;
  protected formBuilder: FormBuilder;
  protected destroy$ = new Subject<void>();

  abstract modelEvent: any;
  abstract setEvent(): void;
  abstract initForm(): void;
  abstract submitData(): void;
  abstract submissionError(err: string): void;

  protected constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setEvent();
    this.initForm();
    this.isLoading.pipe(takeUntil(this.destroy$));
    this.submitted.pipe(takeUntil(this.destroy$));
    this.componentInit();
  }

  componentInit() {}

  public attemptFormSubmission(): void {
    this.isLoading.next(true);
    this.submitted.next(true);
    if (!this.formEvent.valid) {
      this.isLoading.next(false);
      return;
    } else {
      this.submitData();
    }
  }

  protected reset(): void {
    this.isLoading.next(false);
    this.submitted.next(false);
    this.formEvent.reset();
  }

  protected get raw(): any {
    return this.formEvent.getRawValue();
  }

  protected get form(): FormGroup {
    return this.formEvent;
  }

  protected get controls() {
    return this.formEvent.controls;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
