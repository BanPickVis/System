<template>
    <div>
        <h1>This is detail page.</h1>
        <RadarChart />
    </div>
</template>

<script>
import RadarChart from "components/radarChart";

export default {
    name: "App",
    components: {
        RadarChart,
    },
};
</script>
