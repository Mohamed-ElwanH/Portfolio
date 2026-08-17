const navBtns = document.querySelectorAll(".admin-nav__item");
const views = document.querySelectorAll(".admin-view");

const addEduBtn = document.getElementById('add-education-btn');
const editor = document.getElementById('education-editor');
const certsEditor = document.getElementById('certifications-editor');
const addCertsBtn = document.getElementById('add-cert-btn');
const eduTemplate = document.getElementById('education-entry-template');
const certTemplate = document.getElementById('cert-entry-template');

const skillsEditor = document.getElementById('skills-editor');
const addSkillBtn = document.getElementById('')
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetView = btn.dataset.view;
    navBtns.forEach((b) => b.classList.remove("is-active"));
    views.forEach((v) => v.classList.remove("is-active"));

    btn.classList.add("is-active");
    document
      .querySelector(`.admin-view[data-view-panel="${targetView}"]`)
      .classList.add("is-active");
  });
});
document.querySelectorAll('[data-goto-view]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(`.admin-nav__item[data-view="${btn.dataset.gotoView}"]`).click();
  });
});
const initial = location.hash.replace('#', '') || 'overview';
document.querySelector(`.admin-nav__item[data-view="${initial}"]`)?.click();

addEduBtn.addEventListener('click', ()=>{
    const newEntry = eduTemplate.content.firstElementChild.cloneNode(true);
    const newEduId = editor.querySelectorAll('.admin-entry').length + 1;

    newEntry.dataset.eduId = newEduId;
    newEntry.querySelector('.admin-entry__tag').textContent = `Entry #${newEduId}`;
    newEntry.querySelectorAll('input, textarea').forEach(field => {
        field.value = '';
        field.id = field.id.replace(/-$/, `-${newEduId}`);
    });
    newEntry.querySelectorAll('label').forEach(label => {
        label.htmlFor = label.htmlFor.replace(/-$/, `-${newEduId}`);
    });
    editor.appendChild(newEntry);
});
editor.addEventListener('click', (e)=>{
    const removeBtn = e.target.closest('[data-action="delete-education"]');
    if(!removeBtn)  return;
    removeBtn.closest('.admin-entry').remove();
    editor.querySelectorAll('.admin-entry').forEach((entry, i)=>{
        entry.querySelector('.admin-entry__tag').textContent = `Entry #${i + 1}`;
    });
});
addCertsBtn.addEventListener('click', ()=>{
    const newEntry = certTemplate.content.firstElementChild.cloneNode(true);

    const newCertId = certsEditor.querySelectorAll('.admin-entry').length + 1;

    newEntry.dataset.certId = newCertId;
    newEntry.querySelector('.admin-entry__tag').textContent = `Certification #${newCertId}`;
    newEntry.querySelectorAll('input, textarea').forEach(field => {
        field.value = '';
        field.id = field.id.replace(/-$/, `-${newCertId}`);
    });
    newEntry.querySelectorAll('label').forEach(label => {
        label.htmlFor = label.htmlFor.replace(/-$/, `-${newCertId}`);
    });
    certsEditor.appendChild(newEntry);
});
certsEditor.addEventListener('click', (e)=>{
const removeBtn = e.target.closest('[data-action="delete-cert"');
    if(!removeBtn)  return;
    removeBtn.closest('.admin-entry').remove();
    certsEditor.querySelectorAll('.admin-entry').forEach((entry, i)=>{
        entry.querySelector('.admin-entry__tag').textContent = `Entry #${i + 1}`;
    })
});