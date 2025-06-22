import axios from "axios";

export const createProfile = async (
  caseNumber,
  offenseCategory,
  fmojDept,
  courtNumber,
  courtLocation,
  courtClerk,
  assignedJudge,
  chargeSheetNo,
  offenseType,
  agency,
  lawEnforcementOfficer,
  legalBasis,
  particularsOfOffense,
  chargeDetails,
  legalBriefAndMemoranda,
  accusedImage,
  accusedFirstName,
  accusedLastName,
  accusedMiddleName,
  accusedBvn,
  accusedNin,
  accusedAlias,
  caseStatus,
  accusedStatus,
  dateInitiated,
  associate,
  attachment,
  mugshot,


  firstname,
  middlename,
  lastname,
  alias,
  // "phonenumber
  // "email
  // "suspectstatus
  // "nationality
  // "stateOfOrigin
  // "lga
  // "religion
  // "sex
  // "height
  // "weight
  // "eyecolour
  // "bvn
  // "nin
  // "driversLicenseNumber
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log({
      caseNumber,
      offenseCategory,
      fmojDept,
      courtNumber,
      courtLocation,
      courtClerk,
      assignedJudge,
      chargeSheetNo,
      offenseType,
      agency,
      lawEnforcementOfficer,
      legalBasis,
      particularsOfOffense,
      chargeDetails,
      legalBriefAndMemoranda,
      accusedImage,
      accusedFirstName,
      accusedLastName,
      accusedMiddleName,
      accusedBvn,
      accusedNin,
      accusedAlias,
      caseStatus,
      accusedStatus,
      dateInitiated,
      associate,
      attachment,
      mugshot,
    });
    const res = await axios.post(
      `https://ccppas.centraconnect.ai/fmoj/case`,
      {
        caseNumber,
        offenseCategory,
        fmojDept,
        courtNumber,
        courtLocation,
        courtClerk,
        assignedJudge,
        chargeSheetNo,
        offenseType,
        agency,
        lawEnforcementOfficer,
        legalBasis,
        particularsOfOffense,
        chargeDetails,
        legalBriefAndMemoranda,
        accusedImage,
        accusedFirstName,
        accusedLastName,
        accusedMiddleName,
        accusedBvn,
        accusedNin,
        accusedAlias,
        caseStatus,
        accusedStatus,
        dateInitiated,
        associate,
        attachment,
        mugshot,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};