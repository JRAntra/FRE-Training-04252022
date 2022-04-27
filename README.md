# FRE-Training-04252022

This is a repo to record the FRE-TRAINING assignments and notes.

## How to record your FEE-TRAINING assignments by using this repo:

### Clone this repo:

open your terminal

```bash
cd your_work_dir
git clone https://github.com/JRAntra/FRE-Training-04252022.git
```

### Create your feature branch to implement the assignment.

```bash
git branch by_your_name/notes
git checkout by_your_name/notes
implement the assignment under this feature branch.
```

### Sign Up Page Assignment Note to Submit on Apr 27, 2022:

- Lighthouse evaluation yielded 100 on all aspects: Performance, Accessibility, Best Practices, and SEO;
- Buttons and spans background-color v. font-color contrast ratio meet the Accessibility requirement;
- Every input field has label, visibility set to hidden for aesthetic, yet they provide Accessibility for screen reader;
- Because this is multi-use form, the formaction attribute given for each button, and html required attribute is only embedded on Email Address field, Password, and Confirm Password since those fields have to be filled either on Registration or Sign In. For the First Name, Last Name, and Mobile No., validation can only relies on JavaScript validation;
- Font-size is set globally to be Accessible on any screen size using min and max value;
- All sizing units use relative units, i.e. .em or .rem to maintain proportion on any screen size;
- Added media queries for max-width 585px so that page became responsive.
