import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

import {
    RecentProducts,
} from "components/dashboard"

export const DashboardPage: React.FC = () => {
    return (
        <Grid container columns={24} spacing={2}>
            <Grid width={"100%"} height={"100%"}>
                <Card sx={{ height: "100%", width: "100%", paddingX: { xs: 2 } }}>
                    <CardHeader title={"Products"} />
                    <RecentProducts />
                </Card>
            </Grid>
        </Grid>
    );
};