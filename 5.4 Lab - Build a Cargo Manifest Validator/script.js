/*Build a Cargo Manifest Validator
In this lab, you will use JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

Each cargo manifest will be represented as an object with the following properties:

containerId: a positive integer identifying the associated cargo container.
destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
weight: a positive number representing the cargo's weight.
unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
hazmat: a boolean value indicating whether hazardous material handling is needed.
Example cargo manifest object:

{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should implement a function named normalizeUnits with a manifest parameter.

The function must not mutate the original manifest object and must always return a new object where weight is normalized to kilograms and unit is set to "kg".
If the weight of the manifest object is expressed in pounds (unit: "lb"), the function should convert the weight to kilograms using the approximate conversion, 1 lb = 0.45 kg, and update the unit accordingly.
If the weight is already expressed in kilograms (unit: "kg"), the weight and unit should remain unchanged.
You should implement a function named validateManifest with a manifest parameter.

The function must not mutate the original manifest object and must always return a new object.
If the input manifest is valid (no missing or invalid properties), the function should return an empty object.
If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property. Missing properties should have the value "Missing" and invalid properties should have the value "Invalid".
Example return value where the input object is missing the destination property and has an invalid weight property:

{
  destination: "Missing",
  weight: "Invalid"
}
You should implement a function named processManifest with a manifest parameter. The function should log:

If the manifest object is valid, Validation success: ${containerId} and then the manifest's weight in kilograms as such, Total weight: ${weight} kg. Use normalizeUnits() for this conversion.
If the manifest object is not valid, Validation error: ${containerId} and then the object returned by calling validateManifest() with the manifest object.
Note: each of these two cases should have two console.log() calls.

*/




function normalizeUnits(manifest) {
  const copy = { ...manifest };
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
    copy.unit = "kg";
  }
  return copy;
}

function validateManifest(manifest) {
  const errors = {};

  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (typeof manifest.unit !== "string" || manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  return errors
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`)
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`)
  } else if (Object.keys(errors).length !== 0) {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}