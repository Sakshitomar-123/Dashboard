import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Camera,
  FileText,
  Users,
  ShoppingCart,
} from "lucide-react";
import {
  IconWrapper,
  YesterdayStats,
  ValueWrapper,
  Title,
  Card,
  CardContent,
  Grid,
  Trend,
  Value,
  StatsContent,
} from "../styled/AttendanceChart.styles";

const StatsCard = () => {
  const statsConfig = [
    {
      title: "Forms Filled",
      value: 0,
      trend: 0,
      yesterday: 0,
      icon: FileText,
      iconColor: "#4318FF",
      bgColor: "#EBE5FF",
    },
    {
      title: "Photos Uploaded",
      value: 5,
      trend: 400,
      yesterday: 1,
      icon: Camera,
      iconColor: "#00C48C",
      bgColor: "#E6F8F3",
    },
    {
      title: "New Clients",
      value: 0,
      trend: 0,
      yesterday: 0,
      icon: Users,
      iconColor: "#FFB946",
      bgColor: "#FFF4E5",
    },
    {
      title: "Orders Submitted",
      value: 0,
      trend: 0,
      yesterday: 0,
      icon: ShoppingCart,
      iconColor: "#FF6464",
      bgColor: "#FFE5E5",
    },
  ];

  return (
    <Grid>
      {statsConfig.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <CardContent>
              <StatsContent>
                <ValueWrapper>
                  <Value>{stat.value}</Value>
                  <Trend>
                    {stat.trend > 0 ? `+${stat.trend}%` : `${stat.trend}%`}
                  </Trend>
                </ValueWrapper>
                <Title>{stat.title}</Title>
                <YesterdayStats trend={stat.trend}>
                  {stat.trend >= 0 ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  <span>{stat.yesterday} Yesterday</span>
                </YesterdayStats>
              </StatsContent>

              <IconWrapper bg={stat.bgColor} color={stat.iconColor}>
                <Icon size={24} />
              </IconWrapper>
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  );
};

export default StatsCard;
