import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const pages = [
  { name: "Introduction", href: "/" },
  { name: "About me", href: "/about" },
  { name: "Credentials", href: "/credentials" },
  { name: "My works", href: "/projects" },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link
                  href={page.href}
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
