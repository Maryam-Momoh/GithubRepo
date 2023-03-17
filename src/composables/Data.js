import { ref } from "vue";

export const data = () => {
    const repositories = ref([]);
    const totalRepos = ref(0)

    fetch('https://api.github.com/users/Maryam-Momoh/repos')
    .then(response => response.json())
    .then(data => {
      repositories.value = data;
      totalRepos.value = data.length
    })
    .catch(error => console.error(error));

    return {repositories, totalRepos}
}

