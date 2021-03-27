import React, { useState, useEffect } from 'react';
import ls from 'local-storage';

import CustomForm from './components/CustomForm';
import formDef from './data/formDef';

function App() {

  const [form, setForm] = useState(null);

  useEffect(() => {
    // mock loading saved form
    let loadedForm = ls.get('savedForm');
    console.log(loadedForm);

    if (loadedForm && loadedForm.length > 0) {
      loadedForm = JSON.parse(loadedForm);
      setForm(loadedForm);
    } else {
      setForm({});
    }
  }, []);

  return (
    <div className="content">
      { form && <CustomForm formDef={formDef} savedForm={form} />}
    </div>
  );
}

export default App;
