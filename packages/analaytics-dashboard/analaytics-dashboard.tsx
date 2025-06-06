// "use client"

// import { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent, Button, Progress, Badge } from "@monorepo/ui-components"
// import { formatCurrency } from "@monorepo/utils"
// import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Activity, Download, Filter } from "lucide-react"

// export function AnalyticsDashboard() {
//   const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "1y">("30d")

//   // Mock analytics data
//   const metrics = {
//     totalUsers: 1234,
//     activeUsers: 856,
//     revenue: 45678,
//     conversionRate: 3.2,
//     userGrowth: 12.5,
//     revenueGrowth: 8.3,
//   }

//   const chartData = [
//     { name: "Mon", users: 120, revenue: 2400 },
//     { name: "Tue", users: 132, revenue: 2210 },
//     { name: "Wed", users: 101, revenue: 2290 },
//     { name: "Thu", users: 134, revenue: 2000 },
//     { name: "Fri", users: 90, revenue: 2181 },
//     { name: "Sat", users: 230, revenue: 2500 },
//     { name: "Sun", users: 210, revenue: 2100 },
//   ]

//   const topPages = [
//     { page: "/dashboard", views: 1234, bounce: 23 },
//     { page: "/students", views: 987, bounce: 18 },
//     { page: "/tasks", views: 756, bounce: 31 },
//     { page: "/profile", views: 543, bounce: 25 },
//   ]

//   return (
//     <Card className="w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle className="flex items-center justify-between">
//           <span className="flex items-center space-x-2">
//             <BarChart3 className="h-5 w-5" />
//             <span>Analytics Dashboard</span>
//           </span>
//           <div className="flex space-x-2">
//             <Button variant="outline" size="sm">
//               <Filter className="h-4 w-4 mr-2" />
//               Filter
//             </Button>
//             <Button variant="outline" size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export
//             </Button>
//           </div>
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         {/* Time Range Selector */}
//         <div className="flex space-x-2">
//           {["7d", "30d", "90d", "1y"].map((range) => (
//             <Button
//               key={range}
//               variant={timeRange === range ? "default" : "outline"}
//               size="sm"
//               onClick={() => setTimeRange(range as any)}
//             >
//               {range}
//             </Button>
//           ))}
//         </div>

//         {/* Key Metrics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <Card>
//             <CardContent className="p-4">
//               <div className="flex items-center space-x-2">
//                 <Users className="h-4 w-4 text-blue-500" />
//                 <div>
//                   <p className="text-sm font-medium">Total Users</p>
//                   <p className="text-2xl font-bold">{metrics.totalUsers.toLocaleString()}</p>
//                   <div className="flex items-center space-x-1 mt-1">
//                     <TrendingUp className="h-3 w-3 text-green-500" />
//                     <span className="text-xs text-green-500">+{metrics.userGrowth}%</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-4">
//               <div className="flex items-center space-x-2">
//                 <Activity className="h-4 w-4 text-green-500" />
//                 <div>
//                   <p className="text-sm font-medium">Active Users</p>
//                   <p className="text-2xl font-bold">{metrics.activeUsers.toLocaleString()}</p>
//                   <div className="flex items-center space-x-1 mt-1">
//                     <TrendingUp className="h-3 w-3 text-green-500" />
//                     <span className="text-xs text-green-500">+5.2%</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-4">
//               <div className="flex items-center space-x-2">
//                 <DollarSign className="h-4 w-4 text-purple-500" />
//                 <div>
//                   <p className="text-sm font-medium">Revenue</p>
//                   <p className="text-2xl font-bold">{formatCurrency(metrics.revenue)}</p>
//                   <div className="flex items-center space-x-1 mt-1">
//                     <TrendingUp className="h-3 w-3 text-green-500" />
//                     <span className="text-xs text-green-500">+{metrics.revenueGrowth}%</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-4">
//               <div className="flex items-center space-x-2">
//                 <BarChart3 className="h-4 w-4 text-orange-500" />
//                 <div>
//                   <p className="text-sm font-medium">Conversion Rate</p>
//                   <p className="text-2xl font-bold">{metrics.conversionRate}%</p>
//                   <div className="flex items-center space-x-1 mt-1">
//                     <TrendingDown className="h-3 w-3 text-red-500" />
//                     <span className="text-xs text-red-500">-0.8%</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Charts */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>User Activity</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {chartData.map((data, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <span className="text-sm font-medium">{data.name}</span>
//                     <div className="flex items-center space-x-2">
//                       <Progress value={(data.users / 250) * 100} className="w-20 h-2" />
//                       <span className="text-sm text-muted-foreground">{data.users}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Revenue Trend</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {chartData.map((data, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <span className="text-sm font-medium">{data.name}</span>
//                     <div className="flex items-center space-x-2">
//                       <Progress value={(data.revenue / 2500) * 100} className="w-20 h-2" />
//                       <span className="text-sm text-muted-foreground">{formatCurrency(data.revenue)}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Top Pages */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Top Pages</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {topPages.map((page, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
//                   <div>
//                     <p className="font-medium">{page.page}</p>
//                     <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
//                   </div>
//                   <div className="text-right">
//                     <Badge variant={page.bounce < 25 ? "default" : "secondary"}>{page.bounce}% bounce</Badge>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Performance Metrics */}
//         <div className="grid md:grid-cols-3 gap-4">
//           <Card>
//             <CardContent className="p-4">
//               <h4 className="font-medium mb-2">Page Load Time</h4>
//               <p className="text-2xl font-bold">1.2s</p>
//               <Progress value={75} className="mt-2" />
//               <p className="text-xs text-muted-foreground mt-1">25% faster than last month</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-4">
//               <h4 className="font-medium mb-2">Server Uptime</h4>
//               <p className="text-2xl font-bold">99.9%</p>
//               <Progress value={99.9} className="mt-2" />
//               <p className="text-xs text-muted-foreground mt-1">Excellent performance</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-4">
//               <h4 className="font-medium mb-2">Error Rate</h4>
//               <p className="text-2xl font-bold">0.1%</p>
//               <Progress value={1} className="mt-2" />
//               <p className="text-xs text-muted-foreground mt-1">Within acceptable range</p>
//             </CardContent>
//           </Card>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
