// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-OyuMqGyYxGmdq6jVwlJawK0YeX1bCPQ",
    authDomain: "pedtb-ci.firebaseapp.com",
    projectId: "pedtb-ci",
    storageBucket: "pedtb-ci.appspot.com",
    messagingSenderId: "579965593563",
    appId: "1:579965593563:web:c9e65a0a13db50b8b4e9fe",
    measurementId: "G-812M331VVC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const colRef = db.collection('referralForm');

// Function to handle form submission
function submitForm() {
    const referralForm = document.querySelector('form');
    referralForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            referringDetails: {
                caseNumber: referralForm.caseNumber.value,
                dateReferred: referralForm.dateReferred.value,
                referringFacility: referralForm.referringFacility.value,
                contactNumber: referralForm.contactNumber.value,
                email: referralForm.email.value,
                address: referralForm.address.value,
                dotsStaffName: referralForm.dotsStaffName.value,
                dotsStaffContact: referralForm.dotsStaffContact.value,
                designation: referralForm.designation.value,
            },
            patientInformation: {
                patientName: referralForm.patientName.value,
                patientAge: referralForm.patientAge.value,
                patientSex: referralForm.patientSex.value,
                patientWeight: referralForm.patientWeight.value,
                patientAddress: referralForm.patientAddress.value,
            },
            referralReason: {
                reason: referralForm.referralReason.value,
                otherReasonsDetail: referralForm.referralReason.value === 'otherReasons' ? referralForm.otherReasonsDetail.value : '',
            },
            medicalInformation: {
                bacteriologicalStatus: referralForm.bacteriologicalStatus.value,
                anatomicalSite: referralForm.anatomicalSite.value,
                drugSusceptibility: referralForm.drugSusceptibility.value,
                treatmentHistory: referralForm.treatmentHistory.value,
            },
            receivingDetails: {
                referringUnitName: referralForm.referringUnitName.value,
                referringUnitAddress: referralForm.referringUnitAddress.value,
                receivingUnitName: referralForm.receivingUnitName.value,
                dateReceived: referralForm.dateReceived.value,
                receivingUnitContact: referralForm.receivingUnitContact.value,
                receivingUnitAddress: referralForm.receivingUnitAddress.value,
                dotsStaffNameReceive: referralForm.dotsStaffNameReceive.value,
                dotsStaffContactReceive: referralForm.dotsStaffContactReceive.value,
                designationReceive: referralForm.designationReceive.value,
            },
            labInformation: {
                labTestType: referralForm.labTestType.value,
                dateOfLabTest: referralForm.dateOfLabTest.value,
                results: referralForm.results.value,
            },
            actionsTaken: {
                actionTaken: referralForm.actionTaken.value,
                dateRegistered: referralForm.dateRegistered.value,
                regimenDetails: referralForm.regimenDetails.value,
                notTreatedReason: referralForm.actionTaken.value === 'others' ? referralForm.otherActionsDetail.value : '',
            },
        };

        // Add the form data to Firestore
        colRef.add(formData)
            .then((docRef) => {
                referralForm.reset();
            })
            .catch((error) => {
                console.error("Firestore error:", error);
                alert("Error adding document: " + error);
            });
    });
}

// Call the submitForm function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    submitForm();
});
