<template>
  <section class="2xl:max-w-screen-2xl mx-auto px-4 md:px-8 p-8 lg:pb-16 lg:px-16 text-center lg:text-left">
    <h2 class="text-[28px] font-medium">Miembros del cómite ejecutivo de REP.DOM</h2>
    <hr class="mt-2 border-#F5F5F5 mb-14">
    <ul class="list-none p-0 m-0 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-14 gap-6">
      <li v-for="team in teams" :key="team">
        <MoleculesTeamCard :name="team.name" :position="team.position" :description="team.description" :img="team.img" />
      </li>
    </ul>
  </section>
</template>

<script>
import { teams } from '~/assets/helpers/Team.js';

export default {
  name: 'AboutTeam',
  data() {
    return {
      teams
    }
  }
}
</script>