const QUERY = {
  CREATE_PATIENT: `CREATE INTO patients (first_name,last_name,email,phone,address,diagnosis,image_url) VALUES (?,?,?,?,?,?,?)`,
  SELECT_PATIENT: `SELECT * FROM patients WHERE id=?`,
  UPDATE_PATIENT: `UPDATE patients SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, diagnosis = ?, image_url = ? WHERE id = ?;`,
  DELETE_PATIENT: `DELETE FROM patients WHERE id = ?`,
  SELECT_PATIENTS: `SELECT * FROM patients ORDER BY created_at DESC LIMIT 100`,
};

export default QUERY;
