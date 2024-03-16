import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

function getSteps() {
  return [
    "Personal Information",
    "Education History",
    "Employment History",
    "Additional Information",
  ];
}

const PersonalInformationForm = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "First Name is required" }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={{ required: "Last Name is required" }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: "Phone Number is required" }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address"
        rules={{ required: "Address is required" }}
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.address}
            helperText={errors.address?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        rules={{ required: "City is required" }}
        render={({ field }) => (
          <TextField
            id="city"
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.city}
            helperText={errors.city?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="state"
        rules={{ required: "State is required" }}
        render={({ field }) => (
          <TextField
            id="state"
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.state}
            helperText={errors.state?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="zipCode"
        rules={{ required: "Zip Code is required" }}
        render={({ field }) => (
          <TextField
            id="zip-code"
            label="Zip Code"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.zipCode}
            helperText={errors.zipCode?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{ required: "Country is required" }}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.country}
            helperText={errors.country?.message}
            {...field}
          />
        )}
      />
    </>
  );
};

const EducationHistoryForm = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="degree"
        rules={{ required: "Degree is required" }}
        render={({ field }) => (
          <TextField
            id="degree"
            label="Degree"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.degree}
            helperText={errors.degree?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="schoolName"
        rules={{ required: "School/University Name is required" }}
        render={({ field }) => (
          <TextField
            id="school-name"
            label="School/University Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.schoolName}
            helperText={errors.schoolName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="major"
        rules={{ required: "Major/Field of Study is required" }}
        render={({ field }) => (
          <TextField
            id="major"
            label="Major/Field of Study"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.major}
            helperText={errors.major?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="graduationYear"
        rules={{ required: "Graduation Year is required" }}
        render={({ field }) => (
          <TextField
            id="graduation-year"
            label="Graduation Year"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.graduationYear}
            helperText={errors.graduationYear?.message}
            {...field}
          />
        )}
      />
    </>
  );
};

const EmploymentHistoryForm = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="companyName"
        rules={{ required: "Company Name is required" }}
        render={({ field }) => (
          <TextField
            id="company-name"
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="jobTitle"
        rules={{ required: "Job Title is required" }}
        render={({ field }) => (
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.jobTitle}
            helperText={errors.jobTitle?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="startDate"
        rules={{ required: "Start Date is required" }}
        render={({ field }) => (
          <TextField
            id="start-date"
            label="Start Date"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.startDate}
            helperText={errors.startDate?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="endDate"
        rules={{ required: "End Date is required" }}
        render={({ field }) => (
          <TextField
            id="end-date"
            label="End Date"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.endDate}
            helperText={errors.endDate?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="responsibilities"
        rules={{ required: "Responsibilities are required" }}
        render={({ field }) => (
          <TextField
            id="responsibilities"
            label="Responsibilities"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.responsibilities}
            helperText={errors.responsibilities?.message}
            {...field}
          />
        )}
      />
    </>
  );
};

const AdditionalInformationForm = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="coverLetter"
        rules={{ required: "Cover Letter is required" }}
        render={({ field }) => (
          <TextField
            id="cover-letter"
            label="Cover Letter"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors.coverLetter}
            helperText={errors.coverLetter?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="resume"
        rules={{ required: "Resume/CV is required" }}
        render={({ field }) => (
          <TextField
            id="resume"
            label="Resume/CV"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.resume}
            helperText={errors.resume?.message}
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInformationForm />;
    case 1:
      return <EducationHistoryForm />;
    case 2:
      return <EmploymentHistoryForm />;
    case 3:
      return <AdditionalInformationForm />;
    default:
      return "Unknown step";
  }
}

const LinearStepper = () => {
  const methods = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          {getStepContent(activeStep)}
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep !== steps.length - 1 && (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LinearStepper;
