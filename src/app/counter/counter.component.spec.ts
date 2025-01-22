import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent; // Declare the component instance
  let fixture: ComponentFixture<CounterComponent>; // Declare the fixture for the component

  // set the environment for test
  beforeEach(async () => {
    // Asynchronously configure the testing module for the CounterComponent
    await TestBed.configureTestingModule({
      imports: [CounterComponent], // Import the CounterComponent
    }).compileComponents(); // Compile the component's template and CSS

    // Create the component instance and fixture
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component instance is truthy (exists)
  });

  // Test case to check if the counter is incremented correctly
  it('should increment the counter', () => {
    component.increment(); // Call the increment method on the component
    expect(component.counter).toBe(1); // Assert that the counter value is 1 after increment
  });

  // Test case to check if the counter is decremented correctly
  it('should decrement the counter', () => {
    component.decrement(); // Call the decrement method on the component
    expect(component.counter).toBe(-1); // Assert that the counter value is -1 after decrement
  });


});


// beforeEach():

// beforeEach is a Jasmine function that runs before each test case in the describe block. It is used to set up the testing environment, initialize variables, and perform any necessary setup before each test runs.
// async():

// async is a utility function provided by Angular's testing framework that allows you to write asynchronous test setup code. It ensures that the code inside the beforeEach block runs asynchronously and waits for all asynchronous operations to complete before proceeding to the test cases.
// await:

// await is used to pause the execution of the beforeEach block until the TestBed.configureTestingModule and compileComponents methods complete their asynchronous operations. This ensures that the testing module is fully configured and the component is compiled before the tests run.
